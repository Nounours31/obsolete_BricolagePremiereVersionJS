'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-06 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2066';
    this._commitGIT = '6cf0f7fcc0188f598652dc71fe974707fb0704d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}