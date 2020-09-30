'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-30 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1918';
    this._commitGIT = '34481596533ea35da671d61e2ea84e49bc21f51b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}