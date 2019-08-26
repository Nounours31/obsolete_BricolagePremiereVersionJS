'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-314';
    this._commitGIT = '385c4664e3e7bd9f9c2f13c36282641991d5be67';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}