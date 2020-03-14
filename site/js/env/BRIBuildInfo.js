'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-14 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1118';
    this._commitGIT = '7ab92e73d7381e7136831e99579127af13b3ccb3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}