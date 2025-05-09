/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {word, space, Tokens} from '../../tokens';
import {
  FlowDeclareInterface,
  flowDeclareInterface,
  AnyNode,
} from '@romejs/js-ast';
import FlowInterfaceDeclaration from './FlowInterfaceDeclaration';

export default function(
  builder: Builder,
  node: AnyNode,
): Tokens {
  node = flowDeclareInterface.assert(node);

  return [word('declare'), space, ...FlowInterfaceDeclaration(builder, node)];
}
