'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-17 12:00:13';
    this._versionBuild = 'jenkins-Bricolage-152';
    this._commitGIT = '43a13660c1e9f7bb307dd0a169494255016efd84';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}