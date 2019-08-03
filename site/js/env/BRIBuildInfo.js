'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-03 20:00:12';
    this._versionBuild = 'jenkins-Bricolage-222';
    this._commitGIT = '28dfb182834df28eaf979f7920f99f41b01eed64';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}