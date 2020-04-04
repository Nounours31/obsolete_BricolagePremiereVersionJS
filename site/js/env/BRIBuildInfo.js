'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1199';
    this._commitGIT = '0c5bbd27b89df3584414f5cf62244c5496a705c5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}