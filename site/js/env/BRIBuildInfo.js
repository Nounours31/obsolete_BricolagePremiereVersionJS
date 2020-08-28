'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1785';
    this._commitGIT = 'e4e5c0dac006a4dee4b0803e3b11221bf7aa954f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}