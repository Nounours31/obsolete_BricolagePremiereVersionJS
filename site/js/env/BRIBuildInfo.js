'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-02 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-829';
    this._commitGIT = '5ee21f4c6a9d641d1d6696dc6ac899177a831cf0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}