'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-02 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-705';
    this._commitGIT = '14a5308c5af621e6b5e9a93f3124fde707507ac7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}