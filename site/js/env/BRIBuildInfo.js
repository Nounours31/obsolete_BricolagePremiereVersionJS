'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-25 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1403';
    this._commitGIT = '8356a1959790c94e26d310487988f2bdcb0dbf36';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}