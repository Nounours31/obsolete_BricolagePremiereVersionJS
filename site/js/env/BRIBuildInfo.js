'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-03 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1810';
    this._commitGIT = '5eebb4bb46a8f9e3e9483ba9322da561ebafacb9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}