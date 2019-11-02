'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-02 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-584';
    this._commitGIT = '6a3ef8621ab4475c9d1b0a6cf7b547308866942b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}