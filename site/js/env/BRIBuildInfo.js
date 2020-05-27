'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-27 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1413';
    this._commitGIT = 'eab921b4b200fb7528c4a0504c2ee82d5f60d470';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}