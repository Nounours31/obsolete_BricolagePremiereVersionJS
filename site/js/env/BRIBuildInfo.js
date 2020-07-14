'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-14 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1606';
    this._commitGIT = 'd08cdd298a6ed681f959caf126ef649019c6edb1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}