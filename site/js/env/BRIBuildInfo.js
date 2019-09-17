'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-17 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-402';
    this._commitGIT = 'c193b5ea3afb99cef9f046e7585c3dc36ecdb236';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}