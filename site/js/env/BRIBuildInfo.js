'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-01 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1920';
    this._commitGIT = 'c1f698601ce2263644003f324d16ed8962ac8740';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}