'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-08 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-363';
    this._commitGIT = 'a5ca86ba65d231e2b75727364ab32797bb4ef7b5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}