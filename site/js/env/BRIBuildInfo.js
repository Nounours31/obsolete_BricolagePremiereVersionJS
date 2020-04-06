'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1209';
    this._commitGIT = 'b9acf95c262d46efcfdd805588fe48ca1bb223d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}