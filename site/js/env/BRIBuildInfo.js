'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-01 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1064';
    this._commitGIT = '22a8b2279e5b326b459b64ea8bef313003fe9212';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}