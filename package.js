Package.describe({
  name: 'janmp:rubaxa-sortable',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'rewrite of the Meteor part of rubaxa-sortable',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
      'templating',
      'coffeescript',
      'dalgard:jade@0.5.4',
      'dburles:mongo-collection-instances@0.3.4'
    ]);
  api.export('Sortable');
  api.addFiles(['Sortable.js', 'template.jade'], 'client');
  api.addFiles('sortable-meteor.coffee');
  
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('janmp:rubaxa-sortable');
  api.addFiles('rubaxa-sortable-tests.js');
});
