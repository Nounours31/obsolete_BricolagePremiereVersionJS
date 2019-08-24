'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-24 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-303';
    this._commitGIT = '92570b407914b9d300609548a81657f7556deb2a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}