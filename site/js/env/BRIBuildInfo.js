'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-16 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-885';
    this._commitGIT = '76d08db9b830f91d44ccd3a8ccfe208418c3910c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}