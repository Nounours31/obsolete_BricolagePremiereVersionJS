'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1987';
    this._commitGIT = '884a1bfbbdf363b7b4b65120f987864eed34796d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}