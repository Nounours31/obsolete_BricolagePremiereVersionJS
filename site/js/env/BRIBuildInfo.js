'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-24 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-915';
    this._commitGIT = '65d6906d5d42494df967255d97432acdf68f64d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}