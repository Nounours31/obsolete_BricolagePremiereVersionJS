'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-02 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-1435';
    this._commitGIT = '3abe27a7ce251c5dd105b26bb94025b8e62b68b8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}