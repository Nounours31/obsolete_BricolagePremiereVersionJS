'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-05 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1205';
    this._commitGIT = 'cfa9a5db18e29e9112dee237e192e4d00bbf4931';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}