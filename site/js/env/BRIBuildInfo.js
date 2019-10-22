'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-22 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-542';
    this._commitGIT = '02bd7934dfc45058f599c19e5f68770f324b6d64';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}