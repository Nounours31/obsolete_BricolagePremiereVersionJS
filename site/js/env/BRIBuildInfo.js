'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-04 16:00:13';
    this._versionBuild = 'jenkins-Bricolage-225';
    this._commitGIT = '6336128f9d9c5299a634ce00139e70f4e700f5c9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}