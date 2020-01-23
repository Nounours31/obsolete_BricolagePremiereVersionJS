'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-23 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-912';
    this._commitGIT = 'd6c181065a3207c4672562ee777804f327d6d44b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}