'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-28 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-1659';
    this._commitGIT = 'd073d9777435e08619989f47388da47766b97328';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}