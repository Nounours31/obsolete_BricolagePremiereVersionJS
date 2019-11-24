'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-24 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-671';
    this._commitGIT = 'd01e77a69d3e3ff6fd75ba64ff65d22c711fbde8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}