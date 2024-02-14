module.exports = {
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'refactor',
        'revert',
        'test',
        'style',
      ],
    ],
    'subject-case': [2, 'always', ['sentence-case', 'lower-case']],
    'subject-max-length': [2, 'always', 72],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 150],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 150],
  },
}
