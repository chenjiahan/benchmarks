/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Tokens} from '../../tokens';
import {BigIntLiteral, bigIntLiteral, AnyNode} from '@romejs/js-ast';
import {word} from '@romejs/js-formatter/tokens';

export default function(builder: Builder, node: AnyNode): Tokens {
  node = bigIntLiteral.assert(node);
  return [word(`${node.value}n`)];
}
