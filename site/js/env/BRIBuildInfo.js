'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-08 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-239';
    this._commitGIT = '2d6af66affbd202d4dc7708fa48eaad3a733004f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}