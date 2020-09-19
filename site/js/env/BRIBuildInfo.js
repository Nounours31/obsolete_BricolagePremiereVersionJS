'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-19 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1871';
    this._commitGIT = '84cbf2d14efb89576418fcbb2643900b6e1badba';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}