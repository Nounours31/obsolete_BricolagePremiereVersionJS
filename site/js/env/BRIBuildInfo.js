'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-23 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1764';
    this._commitGIT = '23ed606692131055421e90c0a64cb1dccfa20f7d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}