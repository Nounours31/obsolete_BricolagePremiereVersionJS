'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-08 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-729';
    this._commitGIT = '21c8710e92e9d8da6b3c8f1f1499076e31c17eee';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}