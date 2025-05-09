/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from '../../scopes';
import {
  FlowDeclareOpaqueType,
  flowDeclareOpaqueType,
  AnyNode,
} from '@romejs/js-ast';
import OpaqueT from '../../types/OpaqueT';

export default function(node: AnyNode, scope: Scope) {
  node = flowDeclareOpaqueType.assert(node);

  return new OpaqueT(scope, node.id, node.id.name);
}
