'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-16 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1980';
    this._commitGIT = '440b31b63db0999adc0ae941bf66057c0449e35e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}