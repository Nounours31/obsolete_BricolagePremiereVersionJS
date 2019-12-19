'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-19 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-773';
    this._commitGIT = '629400c6c91158dbbb8f8b07f28e272d421d5b43';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}