# `suppressions.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-compiler/suppressions.test.ts --update-snapshots` to update.

## `duplicates`

```javascript
Object {
  suppressions: Array []
  diagnostics: Array [
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
    }
  ]
}
```

## `multiple categories`

```javascript
Object {
  suppressions: Array []
  diagnostics: Array [
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 2
        }
        start: Object {
          column: 0
          index: 0
          line: 2
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 3
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 4
        }
        start: Object {
          column: 0
          index: 0
          line: 4
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 4
        }
        start: Object {
          column: 0
          index: 0
          line: 4
        }
      }
    }
  ]
}
```

## `single category`

```javascript
Object {
  suppressions: Array []
  diagnostics: Array [
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 2
        }
        start: Object {
          column: 0
          index: 0
          line: 2
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 3
        }
      }
    }
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-suppress</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 4
        }
        start: Object {
          column: 0
          index: 0
          line: 4
        }
      }
    }
  ]
}
```

## `typos`

```javascript
Object {
  suppressions: Array []
  diagnostics: Array [
    Object {
      description: Object {
        category: 'suppressions/incorrectPrefix'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid suppression prefix <emphasis>rome-ignore</emphasis>'}
        advice: Array [
          log {
            category: 'info'
            message: 'Did you mean <emphasis>rome-suppress-next-line</emphasis>?'
          }
        ]
      }
      location: Object {
        filename: 'unknown'
        end: Object {
          column: 0
          index: 0
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
    }
  ]
}
```