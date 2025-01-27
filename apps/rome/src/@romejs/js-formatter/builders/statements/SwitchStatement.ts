/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Tokens, word, space, operator, concat} from '../../tokens';
import {switchStatement, AnyNode} from '@romejs/js-ast';

export default function(builder: Builder, node: AnyNode): Tokens {
  node = switchStatement.assert(node);

  return [
    word('switch'),
    space,
    operator('('),
    concat(builder.tokenize(node.discriminant, node)),
    operator(')'),
    space,
    operator('{'),
    concat(builder.tokenizeStatementList(node.cases, node, true)),
    operator('}'),
  ];
}
