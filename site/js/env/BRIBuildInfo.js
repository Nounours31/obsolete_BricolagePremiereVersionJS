'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-03 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-833';
    this._commitGIT = '85f1983d8846a0e5dc8c455b8ab954b7b0f4cf3e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}