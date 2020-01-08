'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-08 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-854';
    this._commitGIT = 'b19446f5b8dbea3de4fb9a88219fa9206fd5c038';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}