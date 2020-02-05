'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-05 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-964';
    this._commitGIT = 'ac18d2d44f1f73f381fe9d5f1f9079dc42e653bb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}