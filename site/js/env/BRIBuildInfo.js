'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-06 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-357';
    this._commitGIT = 'f4fd28902a480dbce517ac283500e739b31696ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}