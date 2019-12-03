'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-03 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-710';
    this._commitGIT = 'e31e5c76087ba96b1776f6e39bf7e59d12424d7e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}