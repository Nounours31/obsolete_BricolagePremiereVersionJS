'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-03 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2174';
    this._commitGIT = '8c9e8cc6d33a267cacf362796a20126d283f7946';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}