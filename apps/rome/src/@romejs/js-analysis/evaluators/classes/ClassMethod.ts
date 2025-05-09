/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope, ClassScope} from '../../scopes';
import {ClassMethod, classMethod, AnyNode} from '@romejs/js-ast';
import ObjPropT from '../../types/ObjPropT';
import executeFunction from '../../utils/executeFunction';

export default function(node: AnyNode, scope: Scope) {
  node = classMethod.assert(node);
  if (node.key.type === 'ComputedPropertyKey' === true) {
    // TODO
    return undefined;
  }

  const classScope = scope.find(ClassScope);
  const thisContext = node.meta.static === true
    ? classScope.meta.static
    : classScope.meta.instance;
  const func = executeFunction(node, scope, false, thisContext);

  if (node.key.value.type !== 'Identifier') {
    throw new Error('Expected only an identifier key');
  }
  return new ObjPropT(scope, node, node.key.value.name, func);
}
