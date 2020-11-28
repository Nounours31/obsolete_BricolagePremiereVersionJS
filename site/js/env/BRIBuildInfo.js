'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-28 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2152';
    this._commitGIT = 'fa2b4658e4202ad5f5f139412ad7cea2a9759db8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}