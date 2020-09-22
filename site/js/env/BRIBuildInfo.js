'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-22 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1883';
    this._commitGIT = 'a6cb324896999dc6d27e32b657527da4b61ac7e9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}