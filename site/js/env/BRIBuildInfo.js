'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-25 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2015';
    this._commitGIT = '998e9447e44a8cd88c27053eeb6732d5fb6ba5ed';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}